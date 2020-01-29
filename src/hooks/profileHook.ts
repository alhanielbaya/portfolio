import { useSelector } from 'react-redux';
import { IRootState } from '..';
import { IProfileState } from '../store/profileReducer/profileTypes';

export const useProfile = (): IProfileState => {
  const name = useSelector((state: IRootState) => state.profile.name);
  const pic = useSelector((state: IRootState) => state.profile.pic);
  const email = useSelector((state: IRootState) => state.profile.email);
  const location = useSelector((state: IRootState) => state.profile.location);
  const shortDesc = useSelector((state: IRootState) => state.profile.shortDesc);
  const socialMedia = useSelector(
    (state: IRootState) => state.profile.socialMedia
  );

  return {
    name,
    pic,
    email,
    location,
    shortDesc,
    socialMedia
  };
};
