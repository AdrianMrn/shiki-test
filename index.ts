const e = React.createElement;
import shiki from 'shiki';

function Home() {
    const [highlighter, setHighlighter] = React.useState(null);
    const [code, setCode] = React.useState(
        () => `
@php
    /** @var \App\Context\Product\Models\Event $event */
    /** @var \App\Context\User\Models\User $user */
    /** @var \Illuminate\Support\Collection|null $fieldsOfStudy */
    /** @var \Illuminate\Support\Collection $eMaterials */
    /** @var int|null $totalCredits */
    /** @var bool $hasCompliance */
    /** @var string $creditHourLabel */
    /** @var \Illuminate\Support\Collection $complianceFields */
    /** @var array $endpoints */
    /** @var bool $aicpaEnabled */
    /** @var int $printedEMaterialsPrice */
    /** @var \App\Context\Registration\Models\ProductRegistration|null $productRegistration */
    /** @var array $registrableStaffMembers */
    /** @var bool $showSurvey */
    /** @var bool $showRegistrationConfirmation */
@endphp

<x-layout
    fullWidth
    hideTitle
    :title="'Catalog - '.$event->name"
>
    <x-slot name="staffBar">
        <li>
            <a href="{{ action([\App\Http\Staff\Controllers\Products\Event\EventsController::class, 'edit'], $event) }}" class="block text-xs tracking-wide text-accent-2 hover:text-accent-3 p-1.5">
                Edit Event
            </a>
        </li>
        <li>
            <a href="{{ action(App\Http\Front\Controllers\Catalog\EventArtworkController::class, $event) }}" class="block text-xs tracking-wide text-accent-2 hover:text-accent-3 p-1.5">
                Art Preview
            </a>
        </li>
        @if($user && !$isRegistered)
            <li>
                <form method="POST" action="{{ action(App\Http\Front\Controllers\Catalog\EventComplimentaryRegistrationController::class, $event) }}">
                    @csrf
                    <button class="block text-xs tracking-wide text-accent-2 hover:text-accent-3 p-1.5">
                        Create Instant Complimentary Registration For {{ $user->getName() }}
                    </button>
                </form>
            </li>
        @endif
    </x-slot>

    @include('front.catalog.partials.stickyNavigation')

    <div id="hide-sticky-nav" class="relative">
        @if ($showLivestream || $showVideoCountdown)
            <section id="event-simulcast">
                @includeWhen($showLivestream, 'front.catalog.partials.video')
                @includeWhen($showVideoCountdown, 'front.catalog.partials.videoCountdown')
            </section>
        @endif

        {{-- @TODO: clean up components & use proper values from backend --}}
        {{-- @TODO: viewer events (see eLearning/viewerEvents.ts) --}}
        <x-catalog-video
            muxPlaybackId="DS00Spx1CV902MCtPj5WknGlR102V5HFkDe"
            {{-- hlsUrl="https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe.m3u8" --}}
            startTime="2021/07/05 17:34:00"
        />
        <div
            {{-- x-data="daily" --}}
            data-url="https://devrel.daily.co/q9mb6JLroBoKFzeGSZbP"
            data-token="null"
            {{-- data-url="{!! $liveStreamSourceSettings->getDailyRoom()->url !!}"
            data-token="{!! $getDailyMeetingToken !!}"
            data-event-session-uuid="{!! $productRegistration->sessionRegistrations()->first()->uuid !!}" --}}
        ></div>
        <x-catalog-check-ins />

        @if ($isRegistered)
                <section id="event-response" class="relative">

                    @includeWhen($showRegistrationConfirmation, 'front.catalog.partials.responseRegistered')
                    @includeWhen($showSurvey, 'front.catalog.partials.responseSurvey')

                    <aside id="event-card" class="hidden lg:block absolute top-0 left-0 w-full h-full ">
                        <div class="relative h-full layout flex items-stretch">
                            <div class="ml-auto w-1/3 py-12 pl-4 pr-8">
                                <div class="sticky top-6 z-30">
                                    <x-catalog-card-response
                                        :event="$event"
                                        :creditHourLabel="$creditHourLabel"
                                        :totalCredits="$totalCredits"
                                    />
                                </div>
                            </div>
                        </div>
                    </aside>
                </section>
        @endif

        @includeWhen($showEventLobby, 'front.catalog.partials.eventLobby')

        @if($showVideoRecordings)
            <section id="event-video">
                {{-- @include('front.catalog.partials.video') --}}
                @include('front.catalog.partials.videoSoon')
            </section>
        @endif

        <section id="event-description" class="pt-24 relative layout lg:flex lg:items-stretch">
            @unless($isRegistered)
                <div class="w-2/3 mx-auto pb-16
                    lg:w-1/3 lg:pl-4 lg:pr-8 lg:order-2">
                    <div class="sticky top-6 z-30">
                        <x-catalog-card
                            :totalCredits="$totalCredits"
                            :creditHourLabel="$creditHourLabel"
                            :event="$event"
                            :icalendarEndpoint="$endpoints['icalendar']"
                        />
                    </div>
                </div>
            @endunless

            <div class="lg:w-2/3 lg:pr-4 grid grid-cols-1 gap-12">
                <div>
                    <x-catalog-artwork
                        :event="$event"
                        :creditHourLabel="$creditHourLabel"
                        :totalCredits="$totalCredits"
                    />
                </div>

                <h1 class="markup-h2-bold text-gray-5">
                    {{ $event->getName() }} @if($event->provider)(brought to you by {{ $event->provider->name }}) @endif
                </h1>

                <ul class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    @foreach($event->instructors as $instructor)
                        <li>
                            <x-catalog-instructor
                                href="#"
                                src="{{ $instructor->getAvatarUrl() }}"
                                :firstName="$instructor->first_name"
                                :lastName="$instructor->last_name"
                            />
                        </li>
                    @endforeach
                </ul>


                <div class="grid grid-cols-1 gap-6 leading-snug text-gray-4">
                    <div>
                        {!! $event->description !!}
                    </div>
                    @isset($complianceFields['learning_objectives'])
                        <div>
                            <div class="flex items-center">
                                <span class="w-8 icon-coin-stack text-24"></span>
                                <h4 class="markup-body-xl-bold mb-3">Learning Objectives</h4>
                            </div>
                            <p class="pl-8">
                                {{ $complianceFields['learning_objectives'] }}
                            </p>
                        </div>
                    @endisset

                    @isset($complianceFields['major_topics'])
                        <div>
                            <div class="flex items-center">
                                <span class="w-8 icon-coin-stack text-24"></span>
                                <h4 class="markup-body-xl-bold mb-3">Major Topics</h4>
                            </div>
                            <ul class="pl-8 list-disc list-inside">
                                {{ $complianceFields['major_topics'] }}
                            </ul>
                        </div>
                    @endisset
                </div>

                @if($aicpaEnabled)
                    <x-catalog-access/>
                @endif

                @if($event->sponsors->isNotEmpty())
                    <x-hr/>

                    <div>
                        <h2 class="markup-h3-bold text-gray-5">Sponsors</h2>
                        <x-catalog-link-icon icon="external-link" href="#" themeColor="primary">
                            Learn more about sponsorship
                        </x-catalog-link-icon>
                        <ul class="mt-6 flex flex-wrap">
                            @foreach($event->sponsors as $sponsor)
                                @if($imageUrl = $sponsor->getFirstMediaUrl('image'))
                                    <li class="mr-6">
                                        <a href="{{ $sponsor->url }}">
                                            <img class="h-12" src="{{ $imageUrl }}">
                                        </a>
                                    </li>
                                @endif
                            @endforeach
                        </ul>
                    </div>
                @endif
            </div>
        </section>
    </div>


    @if($event->featuredSpeakers->isNotEmpty())
        <section id="event-featured-speakers" class="relative mt-16 md:mt-40">
            <div class="absolute left-0 top-0 w-full h-2/3 bg-background-2"></div>
            <div class="relative layout-sm">
                <h2 class="py-12 text-center markup-h3-bold text-gray-5">Featured Speakers</h2>
                <ul class="-mx-4 flex flex-wrap justify-center">
                    @foreach($event->featuredSpeakers as $featuredSpeaker)
                        <li class="w-1/2 lg:w-1/3 px-4 mb-8">
                            <x-catalog-speaker
                                href="#"
                                :src="$featuredSpeaker->getAvatarUrl()"
                                :firstName="$featuredSpeaker->first_name"
                                :lastName="$featuredSpeaker->last_name"
                                :title="$featuredSpeaker->job_title"
                                :company="$featuredSpeaker->organization?->name"/>
                        </li>
                    @endforeach
                </ul>
            </div>
        </section>
    @endif

    @if($hasCompliance && $event->type->equals(\App\Context\Product\States\EventType\SingleSessionEventType::class))
        <section id="event-credits" class="mt-16 md:mt-40 py-12 bg-primary-2 text-white">
            <div class="layout-sm">
                <div class="grid lg:grid-cols-2">
                    <div class="
                    flex items-center lg:justify-between
                    pb-8 lg:pb-0 lg:pr-8
                    border-white border-b-2 lg:border-b-0 lg:border-r-2">
                        <h2 class="markup-h3-bold text-white">
                            What {{ $creditHourLabel }} credits
                            <br>
                            are available
                            </h2>
                            <div class="pl-4 flex flex-col items-center">
                                <div class="text-64 leading-none">
                                    {{ $totalCredits }}
                                </div>
                                <h5>Total {{ $creditHourLabel }}</h5>
                            </div>
                    </div>
                    @if($fieldsOfStudy)
                        <div class="
                    flex items-center
                    pt-8 lg:pt-0 lg:pl-8">
                            <dl class="grid grid-cols-auto-1fr items-center gap-2">
                                @foreach($fieldsOfStudy as $fieldOfStudy)
                                    <dt class="text-32 font-light leading-none">{{ $fieldOfStudy['credit_hours'] }}</dt>
                                    <dd class="text-16">{{ $fieldOfStudy['name'] }}</dd>
                                @endforeach
                            </dl>
                        </div>
                    @endif
                </div>
            </div>
        </section>
    @endif

    @if($event->venue && $deliveryFormat->type->equals(\App\Context\Product\Enums\DeliveryFormatType::in_person()))
        <section id="event-location" class="mt-16 md:mt-40 relative layout-sm py-16 grid grid-cols-10 gap-8">
            <div class="absolute h-full w-full grid grid-cols-10 gap-8 items-stretch">
                <div class="relative col-start-3 col-span-8 rounded-lg overflow-hidden shadow-lg">
                    <div id="map" class="w-full h-64 md:absolute md:h-auto md:inset-0"></div>
                </div>
            </div>

            <address class="z-10 col-span-3 p-6 bg-white shadow-sm rounded-lg not-italic">
                <h4 class="markup-h4-bold text-gray-5">
                    {{ $event->venue?->name }}
                </h4>
                <p class="markup-body-lg text-gray-4">{{ $event->venue?->getFullAddress() }}</p>

                <x-catalog-link-icon icon="external-link" :href="$event->venue?->getDirectionsUrl()" themeColor="secondary">
                    Get Directions
                </x-catalog-link-icon>
            </address>

            <script>
                function initMap() {
                    const location = {
                        lat: {{ $event->venue?->address_lat }},
                        lng: {{  $event->venue?->address_lng }} };

                    const map = new google.maps.Map(document.getElementById("map"), {
                        zoom: 4,
                        center: location,
                        disableDefaultUI: true,
                    });

                    const marker = new google.maps.Marker({
                        position: location,
                        map: map,
                    });
                }
            </script>
            <script
                src="https://maps.googleapis.com/maps/api/js?key={{ config('services.google.public_key') }}&callback=initMap&libraries=&v=weekly"
                async
            ></script>
        </section>
    @endif

    <section id="event-facts" class="mt-16 md:mt-40 layout bg-gradient-to-b from-background-2 to-white rounded-lg text-gray-4">
        <div class="layout-sm py-12">
            <h2 class="markup-h3-bold text-gray-5 text-center">
                Things to know about this course
            </h2>
            <div class="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                @isset($complianceFields['difficulty_level'])
                    <div class="border-t border-gray-1">
                        <h4 class="markup-h4-bold pt-2 pb-3">Course level</h4>
                        <ul class="grid grid-cols-1 gap-2">
                            <li class="flex items-center leading-snug ">
                                <x-catalog-icon-circle icon="coin-stack" class="mr-2 bg-success-2 text-white"/>
                                {{ $complianceFields['difficulty_level'] }}
                            </li>
                        </ul>
                    </div>
                @endisset
                @if($event->professionalAreasOfInterest->isNotEmpty())
                    <div class="border-t border-gray-1">
                        <h4 class="markup-h4-bold pt-2 pb-3">Professional Area of Focus</h4>
                        <ul class="grid grid-cols-1 gap-3">
                            @foreach($event->professionalAreasOfInterest as $professionalAreaOfInterest)
                                <li class="flex items-center leading-snug ">
                                    <x-catalog-icon-circle icon="coin-stack" class="mr-2 bg-secondary-1 text-secondary-3"/>
                                    {{ $professionalAreaOfInterest->name }}
                                </li>
                            @endforeach
                        </ul>
                    </div>
                @endif
                @isset($complianceFields['prerequisites'])
                    <div class="border-t border-gray-1">
                        <h4 class="markup-h4-bold pt-2 pb-3">Prerequisites</h4>
                        <ul class="grid grid-cols-1 gap-3">
                            @foreach($complianceFields['prerequisites'] as $prerequisite)
                                <li class="flex items-center leading-snug ">
                                    <x-catalog-icon-circle :icon="$prerequisite['icon'] ?? 'coin-stack'" class="mr-2 bg-breakout-1 text-breakout-3"/>
                                    {{ $prerequisite['label'] ?? '' }}
                                </li>
                            @endforeach
                        </ul>
                    </div>
                @endisset
                @isset($complianceFields['advance_preparations'])
                    <div class="border-t border-gray-1" x-data="{ expanded: false }">
                        <h4 class="markup-h4-bold pt-2 pb-3">Advanced preparation</h4>
                        <p class="leading-snug overflow-hidden overflow-ellipsis" :class="{ 'line-clamp-3': !expanded }">
                            {{ $complianceFields['advance_preparations'] }}
                        </p>
                        <x-a renderAsButton themeColor="primary" @click="expanded = !expanded" x-text="expanded ? 'Read less' : 'Read more'"/>
                    </div>
                @endisset
                @isset($complianceFields['who_should_attend'])
                    <div class="border-t border-gray-1">
                        <h4 class="markup-h4-bold pt-2 pb-3">Who should attend</h4>
                        <p class="leading-snug">{{ $complianceFields['who_should_attend'] }}</p>
                    </div>
                @endisset
                @if($event->provider)
                    <div class="border-t border-gray-1">
                        <h4 class="markup-h4-bold pt-2 pb-3">Provider</h4>
                        <img class="h-8" src="{{ $event->provider?->getFirstMediaUrl('logo') }}">
                    </div>
                @endif
            </div>
        </div>
    </section>

    <form method="POST" action="{{ action(App\Http\Front\Controllers\Cart\AddProductToCartController::class) }}">
        @csrf
        <input type="hidden" name="product_type" value="{{ $event->getMorphClass() }}"/>
        <input type="hidden" name="product_uuid" value="{{ $event->getUuid() }}"/>

        @if($event->type->equals(\App\Context\Product\States\EventType\MultiSessionEventType::class))
            <section id="event-agenda" class="mt-16 md:mt-40">
                @include('front.catalog.partials.agenda')
            </section>
        @endif

        @if($price = $event->getProductPrice())
            <section id="event-register" class="my-16 md:my-40 layout-sm grid grid-cols-1 gap-6">
                @foreach ($restrictions as $restriction)
                    <x-catalog-button-restriction>
                        {{ $restriction->message }}
                    </x-catalog-button-restriction>
                @endforeach

                @foreach($price->discounts as $discount)
                    <x-catalog-button-discount>
                        {{ $discount->label }}
                    </x-catalog-button-discount>
                @endforeach

                <div class="mt-12">
                    <h4 class='
                        flex items-center justify-center
                        w-full h-14 px-6
                        markup-h4-bold text-white uppercase
                        rounded-t bg-primary-2'>
                        Register for this event
                    </h4>

                    <div class="grid grid-cols-1 lg:grid-cols-10 gap-8">
                        <ul class="lg:col-span-4">
                            {{--                        <li>--}}
                            {{--                            <x-catalog-register-option buttonText="Upgrade &amp; Save">--}}
                            {{--                                <div class="flex flex-col items-center">--}}
                            {{--                                    <img class="h-14" src="/images/passport-logo-gray.png" alt="Passport">--}}
                            {{--                                    <h4 class="markup-h4-bold uppercase text-inherit leading-none">Member</h4>--}}
                            {{--                                </div>--}}
                            {{--                                <div class="mt-2 flex justify-center items-baseline leading-none">--}}
                            {{--                                    <span class="markup-body-xl">$</span>--}}
                            {{--                                    <span class="text-64 font-semibold">0.00</span>--}}
                            {{--                                </div>--}}
                            {{--                            </x-catalog-register-option>--}}
                            {{--                        </li>--}}
                            {{--                        <li>--}}
                            {{--                            <x-catalog-register-option buttonText="Upgrade &amp; Save">--}}
                            {{--                                <img class="h-4" src="/images/cpe-seasons-pass-logo.png" alt="CPE Seasons Pass">--}}
                            {{--                                <div class="mt-2 leading-none">--}}
                            {{--                                    <span class="text-64 font-semibold">8</span>--}}
                            {{--                                    <span class="markup-body-xl">credits</span>--}}
                            {{--                                </div>--}}
                            {{--                            </x-catalog-register-option>--}}
                            {{--                        </li>--}}
                            <li>
                                <x-catalog-register-option
                                    title="MSBA Member"
                                    buttonText="Join"
                                    :active="isset($user) && $user->hasPrimaryMembership()"
                                    :earlyPrice="$event->getProductPrice()?->getEarlyMemberPrice()"
                                    :price="$event->getProductPrice()?->getMemberPrice()"
                                />
                            </li>
                            <li>
                                <x-catalog-register-option
                                    title="MSBA Non-Member"
                                    buttonText="Join"
                                    :active="isset($user) === false || $user->hasPrimaryMembership() === false"
                                    :earlyPrice="$event->getProductPrice()?->getEarlyBasePrice()"
                                    :price="$event->getProductPrice()?->getBasePrice()"
                                />
                            </li>
                        </ul>

                        <div class="py-16 lg:col-span-6">
                            @auth
                                @if($event->type->equals(\App\Context\Product\States\EventType\SingleSessionEventType::class))
                                    @if($event->deliveryFormat->type->equals(\App\Context\Product\Enums\DeliveryFormatType::in_person_and_online()))
                                        <p class="markup-body-xl text-gray-4">
                                            This event will occur in-person and online simulcast. Which format would you like to attend?
                                        </p>

                                        <div class="mt-4">
                                            <x-catalog-radio-buttons
                                                :value="\App\Context\Product\Enums\DeliveryFormatType::in_person()->value"
                                                :options="[['value' => \App\Context\Product\Enums\DeliveryFormatType::in_person()->value, 'label' => \App\Context\Product\Enums\DeliveryFormatType::in_person()->label], ['value' => \App\Context\Product\Enums\DeliveryFormatType::online()->value, 'label' => \App\Context\Product\Enums\DeliveryFormatType::online()->label]]"
                                            />
                                        </div>
                                    @else
                                        <input type="hidden" name="delivery_format_type" value="{{ $event->deliveryFormat->type }}"/>
                                    @endif

                                    {{-- Todo: update radio buttons --}}
                                    <div class="my-12 p-6 bg-gray-1 text-gray-4">
                                        <p class="markup-body-lg leading-none">Course Materials</p>
                                        <label class="mt-3 flex">
                                            <input type="radio"
                                                    name="with_printed_e_materials"
                                                    value="0"
                                                    class="bg-white text-gray-5 border border-primary-2 ring-primary-2 w-6 h-6 p-3">
                                            <div class="ml-4">
                                                <p class="markup-body-md font-semibold">E-Materials Only (included)</p>
                                            </div>
                                        </label>
                                        <label class="mt-3 flex">
                                            <input type="radio"
                                                    name="with_printed_e_materials"
                                                    value="1"
                                                    class="bg-white text-gray-5 border border-primary-2 ring-primary-2 w-6 h-6 p-3">
                                            <div class="ml-4">
                                                <p class="markup-body-md font-semibold">E-Materials + Printed Materials (+ {{ format_currency($printedEMaterialsPrice) }})</p>
                                            </div>
                                        </label>
                                    </div>

                                    {{-- Todo: @willem --}}
                                    @error('delivery_format_type')
                                    <p class="text-red-500">{{ $message }}</p>
                                    @enderror
                                @endif

                                {{-- Todo: @willem --}}
                                @error('with_printed_e_materials')
                                <p class="text-red-500">{{ $message }}</p>
                                @enderror

                                @if($purchaseRestriction)
                                    {{ $purchaseRestriction->message }}
                                @else
                                    <div
                                        class="mt-4 grid sm:grid-cols-2 gap-6"
                                        x-data="{ isOpen: false, filter: '', selectedMembers: [] }"
                                        x-init="$watch('isOpen', () => { filter = ''; selectedMembers = []; })"
                                    >
                                        @if($canBuyForOrganization)
                                            <x-catalog-button-lg type="button" class="border border-breakout-2 text-breakout-2" @click="isOpen = !isOpen">
                                                Register my staff
                                            </x-catalog-button-lg>

                                            <x-modal isOpen="isOpen" title="Select which staff to register">
                                                <input type="text" placeholder="Search for staff" x-model="filter" />

                                                <ul class="flex-1 mt-2 p-2 space-y-2 border border-gray-3 overflow-scroll flex flex-col">
                                                    @foreach($registrableStaffMembers as $member)
                                                        <li x-show="filter === '' || '{{ $member['label'] }}'.toLowerCase().includes(filter.toLowerCase())" class="@if($member['is_registered']) opacity-50 @endif">
                                                            <label class="flex items-center space-x-2">
                                                                <input
                                                                    type="checkbox"
                                                                    name="recipient_uuids[]"
                                                                    x-model="selectedMembers"
                                                                    value="{{ $member['value'] }}"
                                                                    @if($member['is_registered']) disabled @endif
                                                                />
                                                                <span>{{ $member['label'] }}</span>
                                                            </label>
                                                        </li>
                                                    @endforeach
                                                </ul>

                                                <span class="mt-4"><span x-text="selectedMembers.length"></span>/{{ count($registrableStaffMembers) }} members selected</span>

                                                <div class="pt-4 flex justify-between">
                                                    <x-catalog-button-lg
                                                        x-bind:disabled="!selectedMembers.length"
                                                        class="bg-breakout-2 text-white"
                                                        x-bind:class="!selectedMembers.length ? 'opacity-50' : ''"
                                                        type="submit"
                                                        formaction="{{ action(App\Http\Front\Controllers\Cart\RegisterStaffController::class) }}"
                                                    >
                                                        Add to cart
                                                    </x-catalog-button-lg>
                                                    <x-catalog-button-lg class="border border-breakout-2 text-breakout-2" type="button" @click="isOpen = false">
                                                        Cancel
                                                    </x-catalog-button-lg>
                                                </div>
                                            </x-modal>
                                        @endif
                                        @if(! $isRegistered)
                                            <x-catalog-button-lg icon="coin-stack" class="bg-breakout-2 text-white">
                                                Add to cart
                                            </x-catalog-button-lg>
                                        @else
                                            You're already registered
                                        @endif
                                    </div>
                                @endif
                            @endauth

                            @guest
                                {{-- TODO: @willem --}}
                                <p>Please login first to register for this event.</p>
                            @endguest
                        </div>
                    </div>
                </div>
            </section>
        @endif
    </form>

    @if($event->related_products->isNotEmpty())
        <section id="event-related" class="bg-gray-1 py-12">
            <div class="layout-sm">
                <h2 class="mb-12 text-center markup-h3-bold text-gray-5">
                    Other Courses You Might Like
                </h2>
                <ul class="-mx-4 flex flex-wrap justify-center">
                    @foreach($event->related_products as $relatedEvent)
                        <li class="sm:w-1/2 lg:w-1/3 px-4 mb-8">
                            <x-catalog-event-card :event="$relatedEvent" :creditHourLabel="$creditHourLabel"/>
                        </li>
                    @endforeach
                </ul>
            </div>
        </section>
    @endif
</x-layout>
`
    );

    React.useEffect(async () => {
        const h = await shiki.getHighlighter({
            theme: 'dark-plus',
            langs: ['html', 'js', 'css', 'php'],
            paths: { languages: 'languages/' },
        });
        setHighlighter(h);

        console.log('highlighter available');
    }, []);

    async function highlight() {
        console.log(Date.now());
        setCode(highlighter.codeToHtml(code, 'php'));
        console.log(Date.now());
    }

    return (
        <div>
            <button disabled={!highlighter} onClick={highlight}>
                format
            </button>
            <pre dangerouslySetInnerHTML={{ __html: code }} />
        </div>
    );
}

ReactDOM.render(<Home />, document.getElementById('app'));
