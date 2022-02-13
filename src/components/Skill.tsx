import React, { ReactNode } from 'react';

type SkillProps = {
    children: ReactNode,
    weight: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
};

const Skill = ({ children }: SkillProps): JSX.Element => {
    return <>{children}</>;
};

export default Skill;
