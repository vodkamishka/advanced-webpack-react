import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { memo, useCallback } from 'react';
import { loginReducer, setPassword, setUsername } from 'features/AuthByUsername/model/slice/loginSlice';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getUsername } from 'features/AuthByUsername/model/selectors/getUsername/getUsername.';
import { getPassword } from 'features/AuthByUsername/model/selectors/getPassword/getPassword';
import { getIsLoading } from 'features/AuthByUsername/model/selectors/getIsLoading/getIsLoading';
import { getError } from 'features/AuthByUsername/model/selectors/getError/getError';
import { DinamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';


export interface LoginFormProps {
    className?: string
}

const LoginForm = memo(function LoginForm ({ className }: LoginFormProps) {

    const dispatch = useAppDispatch();

    const username = useSelector(getUsername) || '';
    const password = useSelector(getPassword) || '';
    const isLoading = useSelector(getIsLoading) || false;
    const error  = useSelector(getError) || undefined;

    const setUsernameValue = useCallback((username: string) => dispatch(setUsername(username)), [dispatch]);
    const setPasswordValue = useCallback((password: string) => dispatch(setPassword(password)), [dispatch]);
    
    const submit = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username])

    const asyncReducers = {
        loginForm: loginReducer
    }

    const { t } = useTranslation();
    return (
        <DinamicModuleLoader asyncReducers={asyncReducers}>
            <div className={classNames(cls.loginForm, {}, [className])}>
                <Text title={t('Форма авторизации')}/>
                {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR}/>}
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
        </DinamicModuleLoader>

    );
});

export default LoginForm;