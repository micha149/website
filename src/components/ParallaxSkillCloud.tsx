import React, { ReactNode, ReactElement, Children, useRef } from 'react';
import clsx from 'clsx';
import useScrollHandler from '../hooks/useScrollHandler';
import Skill from './Skill';

type ParallaxSkillCloudProps = {
    children: ReactNode,
    className?: string,
};

type SkillProps = GetComponentProps<typeof Skill>;
type SkillElement = ReactElement<SkillProps, typeof Skill>;

const sortByWeight = (a: { weight: number }, b: { weight: number }): number => b.weight - a.weight;

const filterSkillElements = (node: ReactNode): node is SkillElement => {
    if (!React.isValidElement(node)) {
        return false;
    }

    return typeof node.props.weight === 'number';
}

const weightToclassMap: Record<SkillProps['weight'], string> = {
    1: '-translate-z-100 opacity-10 px-32',
    2: '-translate-z-90 opacity-20 px-16',
    3: '-translate-z-80 opacity-30 px-16',
    4: '-translate-z-70 opacity-40 px-8',
    5: '-translate-z-60 opacity-50 px-8',
    6: '-translate-z-50 opacity-60 px-8',
    7: '-translate-z-40 opacity-70 px-4',
    8: '-translate-z-30 opacity-80 px-4',
    9: '-translate-z-20 opacity-90 px-2',
    10: '-translate-z-10 opacity-100 py-1',
};

const ParallaxSkillCloud = ({ children, className }: ParallaxSkillCloudProps): JSX.Element => {
    const ref = useRef<HTMLOListElement>(null);

    const tagElements = Children.toArray(children).filter(filterSkillElements);

    const sortedSkills = tagElements
        .map((el, idx) => ({el, idx, weight: el.props.weight}))
        .sort(sortByWeight);

    useScrollHandler(() => {
        if (!ref.current) {
            return;
        }

        const { top } = ref.current.getBoundingClientRect();

        ref.current.style.perspectiveOrigin = `center ${-(top - window.innerHeight / 2)}px`;
    });

    return (
        <ol ref={ref} className={clsx(className, 'flex flex-wrap items-center justify-center perspective')}>
            {sortedSkills.map(({ idx, el, weight}) => (
                <li key={idx} style={{order: idx}} className={clsx('whitespace-nowrap py-4', weightToclassMap[weight])}>
                    {el}
                </li>
            ))}
        </ol>
    );
};

export default ParallaxSkillCloud;
