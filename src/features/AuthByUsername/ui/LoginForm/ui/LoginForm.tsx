import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { memo, useCallback } from 'react';
import { loginReducer, setPassword, setUsername } from '../../../model/slice/loginSlice';
import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/Text';
import { TextTheme } from '@/shared/ui/Text/ui/Text';
import { loginByUsername } from '../../../model/services/loginByUsername/loginByUsername';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { getUsername } from '../../../model/selectors/getUsername/getUsername.';
import { getPassword } from '../../../model/selectors/getPassword/getPassword';
import { getIsLoading } from '../../../model/selectors/getIsLoading/getIsLoading';
import { getError } from '../../../model/selectors/getError/getError';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';


export interface LoginFormProps {
    className?: string;
    setIsOpen?: (isOpen: boolean) => void;
}

const LoginForm = memo(function LoginForm ({ className, setIsOpen }: LoginFormProps) {

    const dispatch = useAppDispatch();

    const username = useSelector(getUsername) || '';
    const password = useSelector(getPassword) || '';
    const isLoading = useSelector(getIsLoading) || false;
    const error  = useSelector(getError) || undefined;

    const setUsernameValue = useCallback((username: string) => dispatch(setUsername(username)), [dispatch]);
    const setPasswordValue = useCallback((password: string) => dispatch(setPassword(password)), [dispatch]);

    const onClose = useCallback(() => {
        setIsOpen?.(false);
    }, [setIsOpen])

    const submit = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result?.meta.requestStatus === 'fulfilled') {
            onClose();
        }
    }, [dispatch, onClose, password, username])



    const asyncReducers = {
        loginForm: loginReducer
    }

    const { t } = useTranslation();
    return (
        <DynamicModuleLoader asyncReducers={asyncReducers}>
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
        </DynamicModuleLoader>

    );
});

export default LoginForm;