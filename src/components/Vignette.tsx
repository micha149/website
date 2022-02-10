import React from 'react';

const Vignette = (): JSX.Element => {
    return (
        <div className="fixed -inset-0 bg-[radial-gradient(circle,transparent_80%,black_300%)] pointer-events-none" />
    );
};

export default Vignette;
