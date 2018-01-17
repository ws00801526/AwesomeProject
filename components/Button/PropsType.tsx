export default interface PropsType {
    theme?: 'default' | 'primary';
    shape?: 'circle' | 'round' | 'radius'
    title?: string;
    disabled?: boolean;
    size? : 'lg' | 'md' | 'sm';
    onPress?: () => void;
}
