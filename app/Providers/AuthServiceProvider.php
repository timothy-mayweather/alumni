<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
    ];

    /**
     * RegisterSteps any authentication / authorization services.
     */
    public function boot(): void
    {
//        $this->registerPolicies();

//        Gate::define('viewWebSocketsDashboard', function ($user = null) {
//            return in_array($user->email, [
//                //
//            ]);
//        });

    }
}
