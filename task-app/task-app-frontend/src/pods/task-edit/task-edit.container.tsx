import React from 'react';
import { useParams } from 'react-router-dom';

export const TaskEditContainer: React.FC = () => {
  const { id } = useParams();
  return <h2>{id}</h2>;
};
