import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './Sidebar.module.scss';
import {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";
import {Button, ThemeButton} from "shared/ui/Button";
import {useTranslation} from "react-i18next";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const { t, i18n } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
           <Button
               className={classNames('', {}, [className])}
               onClick={onToggle}
               theme={ThemeButton.CLEAR}
           >
               {t("Переключить")}
           </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};

