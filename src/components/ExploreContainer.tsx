import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
    name: string;
}

const ExploreContainer: React.FC<ContainerProps> = (props: ContainerProps) => {
    return (
        <div className="container">
            <strong>{props.name}</strong>
            <p>
                Explore{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
                    UI Components
                </a>
            </p>
        </div>
    );
};

export default ExploreContainer;
