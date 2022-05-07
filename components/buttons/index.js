import CTAButton from './CTAButton.js';
import PillButton from './PillButton.js';

export { CTAButton };
export function PillButton2(
    children = 'Submit',
    isDanger = false,
    isLoading = false,
    isDisabled = false,
    onPress,
) {
    return PillButton(children, isDanger, isLoading, isDisabled, onPress);
}
