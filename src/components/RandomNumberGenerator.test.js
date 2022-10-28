import { render } from "@testing-library/vue";
import RandomNumberGenerator from "./RandomNumberGenerator.vue";
import { test, expect } from 'vitest'
import { shallowMount } from "@vue/test-utils";

test('it should be rendered properly', () => {
    const { getByText } = render(RandomNumberGenerator, {
        props: {
            min: 10,
            max: 20
        }
    });

    getByText('Generated number:');
});

test('it should properly generate number in given range', () => {
    const wrapper = shallowMount(RandomNumberGenerator, {
        props: {
            min: 10,
            max: 20
        }
    });
    expect(wrapper.vm.min).toBe(10);
    expect(wrapper.vm.max).toBe(20);
    expect(wrapper.vm.generated).toBeGreaterThanOrEqual(10);
    expect(wrapper.vm.generated).toBeLessThanOrEqual(20);

    wrapper.find("#inline-min").setValue(200);
    expect(wrapper.vm.generated).toBeGreaterThanOrEqual(20);
    wrapper.find("#inline-max").setValue(500);
    expect(wrapper.vm.generated).toBeGreaterThanOrEqual(200);
});