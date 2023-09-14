<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
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
		return Inertia::render('Auth/Register', ['step'=>1, 'validated'=>[]]);
	}

	/**
	 * Handle an incoming registration request.
	 *
	 * @throws ValidationException
	 */
	public function store(Request $request): RedirectResponse
	{
		if($request->input('step')===1) {
			$validated = $request->validate([
				'firstName' => 'required|string|max:255',
				'middleName' => 'string',
				'lastName' => 'required|string|max:255',
				'ubtebNo' => 'required|string|max:255|unique:' . User::class,
				'email' => 'required|string|email|max:255|unique:' . User::class,
				'phone' => 'required|string',
				'occupation' => ['required', 'string', Rule::in(['employed', 'unEmployed', 'selfEmployed'])],
				'position' => ['string', Rule::requiredIf($request->input('occupation') === 'employed')],//if employed
				'organisation' => ['string', Rule::requiredIf($request->input('occupation') === 'employed')],//if employed
				'businessName' => ['string', Rule::requiredIf($request->input('occupation') === 'selfEmployed')],//if self
				'businessType' => ['string', Rule::requiredIf($request->input('occupation') === 'selfEmployed')],//if self
				'country' => 'required|string',
				'district' => 'required|string',
				'password' => ['required', 'confirmed', Rules\Password::defaults()],
			]);

			$user = User::create([
				'name' => $request->name,
				'email' => $request->email,
				'role' => 'provisional',
				'password' => Hash::make($request->password),
			]);
			event(new Registered($user));

			//register user here
			return redirect()->back()->with(['step'=>2, 'validated'=>['userEmail'=>$validated['email'], 'password'=>$validated['password']]]);
		}

		$validated = $request->validate([
			'institutions' => 'required|string',
			'faculty' => 'required|string',
			'course' => 'required|string',
			'gradYear' => 'required|int|max:'.date('Y').'|digits:4|min:1950',
			'hall' => 'required|string',
			'responsibilities' =>'required|string',
			'firstName' => 'string',//prominent
			'middleName' => 'string',//prominent
			'lastName' => 'string',//prominent
			'role' => 'string',
			'organisation' => 'string',
			'email' => 'email',
			'phone' => 'string'
		]);

		//validate for step2 here

		$user = User::where('email','=',$request->userEmail)->get();
		$user->password = $request->Hash::make($request->password);

		Auth::login($user);

		return redirect(RouteServiceProvider::HOME);
	}
}
