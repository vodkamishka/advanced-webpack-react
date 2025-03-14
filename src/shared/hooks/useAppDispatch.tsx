import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/app/providers/StoreProvider/config/Store';

export const useAppDispatch = () => useDispatch<AppDispatch>();