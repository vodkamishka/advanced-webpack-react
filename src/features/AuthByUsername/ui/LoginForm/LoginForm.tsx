import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { useCallback } from 'react';
import { setPassword, setUsername } from 'features/AuthByUsername/model/slice/loginSlice';
import { useSelector } from 'react-redux';
import { getLoginForm } from 'features/AuthByUsername/model/selectors/getLoginForm/getLoginForm';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';


interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {

    const { username, password, isLoading, error } = useSelector(getLoginForm);
    const dispatch = useAppDispatch();

    const setUsernameValue = useCallback((username: string) => dispatch(setUsername(username)), [dispatch]);
    const setPasswordValue = useCallback((password: string) => dispatch(setPassword(password)), [dispatch]);
    
    const submit = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username])

    const { t } = useTranslation();
    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
            <Input
                placeholder={t('Логин')}
                value={username}
                onChange={setUsernameValue}
            />
            <Input
                placeholder={t('Пароль')}
                value={password}
                onChange={setPasswordValue}
            />
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                disabled={isLoading}
                onClick={submit}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
