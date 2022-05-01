import user from './social-profile/user.json';
import Profile from './social-profile/profile';

import data from './statistics/data.json';
import Statistics from './statistics/statistics';


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={data} />
    </div>
  );
};
