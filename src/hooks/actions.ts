import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { authActions } from '../store/kardo/auth.slice';
import { onboardingActions } from '../store/kardo/onboarding.slice';
import { modalActions } from '../store/kardo/modal.slice';
import { popupActions } from '../store/kardo/popup.slice';
import { currentUserActions } from '../store/kardo/profile.slice';
import { currentEventActions } from '../store/kardo/event.slice'
import { currentChildActions } from '../store/kardo/child.slice';


const actions = {
  ...authActions,
  ...onboardingActions,
  ...modalActions,
  ...popupActions,
  ...currentUserActions,
  ...currentEventActions,
  ...currentChildActions
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
