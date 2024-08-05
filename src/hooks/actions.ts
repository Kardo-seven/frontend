import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { authActions } from '../store/kardo/auth.slice';
import { onboardingActions } from '../store/kardo/onboarding.slice';
import { modalActions } from '../store/kardo/modal.slice';
import { popupActions } from '../store/kardo/popup.slice';


const actions = {
  ...authActions,
  ...onboardingActions,
  ...modalActions,
  ...popupActions
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
