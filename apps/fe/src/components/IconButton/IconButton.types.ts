type BtnType = JSX.IntrinsicElements['button'] & JSX.IntrinsicElements['a'];

export interface IconButtonProps extends BtnType {
    active?: boolean;
    disabled?: boolean;
    label?: string;
    size?: 'large' | 'medium' | 'small';
    variant?: 'simple' | 'simpleFit';
}
