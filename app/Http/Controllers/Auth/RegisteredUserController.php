<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\AcademicInfo;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Validation\Rule;

class RegisteredUserController extends Controller
{
	/**
	 * Display the registration view.
	 */
	public function create(): Response
	{
		return Inertia::render('Auth/Register', ['step'=>1]);
	}

	/**
	 * Handle an incoming registration request.
	 *
	 * @throws ValidationException
	 */
	public function store(Request $request): RedirectResponse
	{
		$validated = $request->validate([
			'firstName' => 'required|string|max:255',
			'middleName' => 'string|nullable',
			'lastName' => 'required|string|max:255',
			'ubtebNo' => 'required|string|max:255|unique:' . User::class,
			'email' => 'required|string|email|max:255|unique:' . User::class,
			'phone' => 'required|string',
			'occupation' => ['required', 'string', Rule::in(['employed', 'unEmployed', 'selfEmployed'])],
			'position' => ['nullable','string', Rule::requiredIf($request->input('occupation') === 'employed')],//if employed
			'organisation' => ['nullable','string', Rule::requiredIf($request->input('occupation') === 'employed')],//if employed
			'businessName' => ['nullable','string', Rule::requiredIf($request->input('occupation') === 'selfEmployed')],//if self
			'businessType' => ['nullable','string', Rule::requiredIf($request->input('occupation') === 'selfEmployed')],//if self
			'country' => 'required|string',
			'district' => 'required|string',
			'password' => ['required', 'confirmed', Rules\Password::defaults()],
		]);

		$validated['password'] = Hash::make($request->password);
		$user = User::create($validated);
        event(new Registered($user));
		$request->session()->put('userEmail', $validated['email']);
		$request->session()->put('userPassword', $validated['password']);
		return redirect('/register/step2');
	}
}
