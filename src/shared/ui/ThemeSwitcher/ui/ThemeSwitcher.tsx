import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { memo } from 'react';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
