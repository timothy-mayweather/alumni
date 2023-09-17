<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

	/**
	 * Display the user's profile form.
	 */
	public function show(User $user, Request $request): Response
	{
		return Inertia::render('Profile/Edit', [
			'chosenUser' => $user,
			'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
			'status' => session('status'),
		]);
	}

    /**
     * Update the user's profile information.
     */
    public function update(Request $request): RedirectResponse
    {
				$validated = $request->validate([
					'email' => ['email', 'max:255', Rule::unique(User::class)->ignore($request->user()->id)],
					'firstName' => 'required|string|max:255',
					'middleName' => 'string|nullable',
					'lastName' => 'required|string|max:255',
					'ubtebNo' => ['string', 'max:255', Rule::unique(User::class)->ignore($request->user()->id)],
					'phone' => 'required|string',
					'occupation' => ['required', 'string', Rule::in(['employed', 'unEmployed', 'selfEmployed'])],
					'position' => ['nullable','string', Rule::requiredIf($request->input('occupation') === 'employed')],//if employed
					'organisation' => ['nullable','string', Rule::requiredIf($request->input('occupation') === 'employed')],//if employed
					'businessName' => ['nullable','string', Rule::requiredIf($request->input('occupation') === 'selfEmployed')],//if self
					'businessType' => ['nullable','string', Rule::requiredIf($request->input('occupation') === 'selfEmployed')],//if self
					'country' => 'required|string',
					'district' => 'required|string'
				]);
        $request->user()->fill($validated);

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
