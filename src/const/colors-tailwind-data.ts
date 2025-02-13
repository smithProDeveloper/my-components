export interface SelectedColorTailwindModel {
    use_case: UseCase;
    number_type: NumberType;
    color_tailwind: ColorTailwind;
}

export type UseCase = 'text'|'bg'|'placeholder:text';
export type NumberType = '50'|'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'|'950';
export type ColorTailwind = 'black'|'white'|'indigo'|'blue'|'yellow'|'red'|'green'|'gray';

export function selectedColorTailwind(data: SelectedColorTailwindModel) {
    if (data.color_tailwind === 'white' || data.color_tailwind === 'black') {
        return `${data.use_case}-${data.color_tailwind}`;
    }
    return `${data.use_case}-${data.color_tailwind}-${data.number_type}`;
}