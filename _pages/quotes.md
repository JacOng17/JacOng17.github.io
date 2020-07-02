---
layout: page
title: Quotes
permalink: /quotes
---
<!-- Responsive Images -->
<!-- <img src="assets/images/quotes/"> -->
<!-- <div class="image-row">
  <div class="image-column">
    <img src="assets/images/quotes/dont_let_the_fear_of_failure.jpeg">
    <img src="assets/images/quotes/growth_is_not_automatic.jpeg">
    <img src="assets/images/quotes/change_is_inevitable_growth_is_optional.jpeg">
  </div>
    <div class="image-column">
      <img src="assets/images/quotes/all_in_no_plan_b.jpeg">
      <img src="assets/images/quotes/follow_your_own_path.jpeg">
      <img src="assets/images/quotes/what_you_are_is_your_gift_to_god.jpeg">
  </div>
      <div class="image-column">
      <img src="assets/images/quotes/live_today_what_you_want_to_be_remembered_for.jpeg">
      <img src="assets/images/quotes/when_the_dream_is_big_enough.jpeg">
  </div>
</div> -->

<div class="image-row">
  <div class="image-column">
    {% for quote in site.data.quotes.column1 %}
      <img src="{{ quote.image }}">
    {% endfor %}
  </div>
  <div class="image-column">
    {% for quote in site.data.quotes.column2 %}
      <img src="{{ quote.image }}">
    {% endfor %}
  </div>
  <div class="image-column">
    {% for quote in site.data.quotes.column3 %}
      <img src="{{ quote.image }}">
    {% endfor %}
  </div>
</div>

<!-- Grid Images -->
<!-- <div class="gallery">
    <figure class="gallery__item gallery__item--1">
        <img src="assets/images/quotes/dont_let_the_fear_of_failure.jpeg" alt="" class="gallery__img">
    </figure>
    <figure class="gallery__item gallery__item--2">
        <img src="assets/images/quotes/growth_is_not_automatic.jpeg" alt="" class="gallery__img">
    </figure>
    <figure class="gallery__item gallery__item--3">
        <img src="assets/images/quotes/all_in_no_plan_b.jpeg" alt="" class="gallery__img">
    </figure>
    <figure class="gallery__item gallery__item--4">
        <img src="assets/images/quotes/follow_your_own_path.jpeg" alt="" class="gallery__img">
    </figure>
    <figure class="gallery__item gallery__item--5">
        <img src="assets/images/quotes/live_today_what_you_want_to_be_remembered_for.jpeg" alt="" class="gallery__img">
    </figure>
    <figure class="gallery__item gallery__item--6">
        <img src="assets/images/quotes/live_today_what_you_want_to_be_remembered_for.jpeg" alt="" class="gallery__img">
    </figure>
</div> -->
