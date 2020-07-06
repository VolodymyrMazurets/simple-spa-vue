<template>
  <button
    class="app-button"
    :class="[type, {fluid, loading}]"
    @click="() => $emit('click')"
    @mouseover="() => $emit('mouseover')"
    @mouseenter="() => $emit('mouseenter')"
    @mouseleave="() => $emit('mouseleave')"
    @mouseout="() => $emit('mouseout')"
    :disabled="disabled"
  >
    <slot name="icon" />
    <span class="app-button__text">
      <slot />
    </span>
    <svg class="app-button__loading" focusable="false" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="9" />
    </svg>
  </button>
</template>
<script>
export default {
  name: 'AppButton',
  props: {
    type: {
      validator(value) {
        return ['primary', 'secondary'].indexOf(value) !== -1;
      },
      default: 'primary',
    },
    fluid: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
@-webkit-keyframes ButtonSpinner {
  to {
    transform: rotate(360deg);
  }
}
@keyframes ButtonSpinner {
  to {
    transform: rotate(360deg);
  }
}

$style: app-button;

$names: 'primary', 'secondary';

$bg: (
  'primary': $P1,
  'secondary': $NL10,
);
$bg-hover: (
  'primary': $P0,
  'secondary': $NL10,
);
$bg-active: (
  'primary': $P3,
  'secondary': $NL4,
);
$bg-disabled: (
  'primary': $P8,
  'secondary': $NL4,
);
$color: (
  'primary': $NL10,
  'secondary': $ND1,
);
$color-hover: (
  'primary': $NL10,
  'secondary': $ND1,
);
$color-active: (
  'primary': $NL10,
  'secondary': $P3,
);
$color-disabled: (
  'primary': $NL10,
  'secondary': $ND1,
);
$loading: (
  'primary': $NL10,
  'secondary': $P1,
);
$border-color: (
  'primary': transparent,
  'secondary': $ND4,
);
$shadow: (
  'primary': none,
  'secondary': 0px 1px 2px rgba(21, 27, 43, 0.12),
);
$shadow-hover: (
  'primary': none,
  'secondary': 0px 2px 6px rgba(21, 27, 43, 0.12),
);
$shadow-active: (
  'primary': none,
  'secondary': none,
);
$shadow-disabled: (
  'primary': none,
  'secondary': 0px 1px 2px rgba(21, 27, 43, 0.12),
);

.#{$style} {
  cursor: pointer;
  min-height: 34px;
  border-radius: 4px;
  padding: 1px 12px 0;
  outline: none;
  position: relative;
  @include flex(center, center);
  @include transition(all);
  width: fit-content;
  border: 1px solid;
  &._small {
    min-height: 24px;
    padding: 0 8px;
  }
  &__text {
    flex-grow: 1;
    @include text($H14, 500);
    @include transition(all);
    @include flex-row(center, center);
  }
  svg:not(.#{$style}__loading) {
    @include svg(20px, $ND4);
    margin-right: 8px;
  }
  &__loading {
    margin: 0 auto;
    right: 0;
    left: 0;
    display: none;
    position: absolute;
    @include svg(20px);
    fill: none;
    stroke-dasharray: 42px;
    stroke-dashoffset: 44px;
    stroke-width: 2px;
    z-index: 1;
    stroke-linecap: round;
    animation: 0.86s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite ButtonSpinner;
  }
  &.loading {
    color: transparent;
    cursor: not-allowed;
    pointer-events: none;
    > *:not(.#{$style}__loading) {
      visibility: hidden;
      opacity: 0;
      pointer-events: none;
    }
  }
  &.fluid {
    width: 100%;
  }
  @each $name in $names {
    &.#{$name} {
      background-color: map-get($bg, $name);
      box-shadow: map-get($shadow, $name);
      border-color: map-get($border-color, $name);
      .#{$style}__text {
        color: map-get($color, $name);
      }
      .#{$style}__loading {
        stroke: map-get($loading, $name);
      }
    }
    @include media($screen-desktop) {
      &.#{$name}:hover {
        background-color: map-get($bg-hover, $name);
        box-shadow: map-get($shadow-hover, $name);
        .#{$style}__text {
          color: map-get($color-hover, $name);
        }
      }
    }
    &.#{$name}:active {
      background-color: map-get($bg-active, $name);
      box-shadow: map-get($shadow-active, $name);
      .#{$style}__text {
        color: map-get($color-active, $name);
      }
    }
    &.#{$name}:disabled {
      background-color: map-get($bg-disabled, $name);
      box-shadow: map-get($shadow-disabled, $name);
      cursor: not-allowed;
      .#{$style}__text {
        color: map-get($color-disabled, $name);
      }
    }
    &.#{$name}.loading {
      .#{$style}__loading {
        visibility: visible;
        opacity: 1;
        display: block;
      }
    }
  }
}
</style>
