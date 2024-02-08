import React from 'react';
import * as Progress from '@radix-ui/react-progress';
import '../globals.css';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  return (
    <Progress.Root className="ProgressRoot" value={progress}>
      <Progress.Indicator
        className="ProgressIndicator"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
};


