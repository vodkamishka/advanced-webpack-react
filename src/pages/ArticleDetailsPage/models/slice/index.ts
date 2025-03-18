import { combineReducers } from '@reduxjs/toolkit';

import { articleDetailsRecommendationsReducer } from './articleDetailsRecommendationSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsRecommendationsReducer
})