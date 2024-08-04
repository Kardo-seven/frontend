import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { authActions } from '../store/kardo/auth.slice';
import { onboardingActions } from '../store/kardo/onboarding.slice';
import { modalActions } from '../store/kardo/modal.slice';


const actions = {
  ...authActions,
  ...onboardingActions,
  ...modalActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
