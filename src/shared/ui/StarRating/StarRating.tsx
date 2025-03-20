import { memo, useState } from 'react';

import cls from './StarRating.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import StarIcon from '@/shared/assets/icons/star.svg';
import { Icon } from '@/shared/ui/Icon';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo(function StarRating({ 
    className, 
    size = 30, 
    selectedStars = 0, 
    onSelect 
}: StarRatingProps) {
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };
    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };
    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames('', {}, [className])}>
            {stars.map((starNumber) => {
                return (
                    <Icon
                        className={classNames(
                            cls.starIcon,
                            { [cls.selected]: isSelected },
                            [currentStarsCount >= starNumber ? cls.hovered : cls.normal],
                        )}
                        Svg={StarIcon}
                        key={starNumber}
                        width={size}
                        height={size}
                        onMouseLeave={onLeave}
                        onMouseEnter={onHover(starNumber)}
                        onClick={onClick(starNumber)}
                        data-testid={`StarRating.${starNumber}`}
                        data-selected={currentStarsCount >= starNumber}
                    />
                )
            })}
        </div>
    );
});
