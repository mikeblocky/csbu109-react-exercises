import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemedSurface({ style, ...props }) {
  const { theme } = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.surface,
        border: `1px solid ${theme.border}`,
        borderRadius: 8,
        color: theme.text,
        ...style
      }}
      {...props}
    />
  );
}
