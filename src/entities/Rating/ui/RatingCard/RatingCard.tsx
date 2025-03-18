import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import cls from './RatingCard.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';
import { Card } from '@/shared/ui/Card/Card';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { ButtonSize, ButtonTheme , Button } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';



interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo(function RatingCard({ 
    className,
    onAccept,
    feedbackTitle,
    hasFeedback,
    onCancel,
    title,
    rate = 0,
}: RatingCardProps) {

    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState<string>('');

    useEffect(() => {
        setStarsCount(rate);
    }, [rate])

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text
                title={feedbackTitle}
            />
            <Input
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Ваш отзыв')}
            />
        </>
    );

    return (
        <Card className={classNames('', {}, [className])}>
            <div>
                <Text title={title} />
                <StarRating
                    size={40}
                    onSelect={onSelectStars}
                    selectedStars={starsCount}
                />
            </div>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <div>
                        {modalContent}
                        <div className={cls.ratingCard}>
                            <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                                {t('Закрыть')}
                            </Button>
                            <Button onClick={acceptHandle}>
                                {t('Отправить')}
                            </Button>
                        </div>
                    </div>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
                    <div>
                        {modalContent}
                        <Button fullWidth onClick={acceptHandle} size={ButtonSize.L}>
                            {t('Отправить')}
                        </Button>
                    </div>
                </Drawer>
            </MobileView>
        </Card>
    );
});
