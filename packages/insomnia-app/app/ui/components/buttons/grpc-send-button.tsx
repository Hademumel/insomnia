import React, { FunctionComponent } from 'react';
import type { GrpcMethodType } from '../../../network/grpc/method';
import { Button, ButtonProps } from 'insomnia-components';
import { GrpcMethodTypeEnum } from '../../../network/grpc/method';

interface Props {
  running: boolean;
  methodType?: GrpcMethodType;
  handleStart: () => Promise<void>;
  handleCancel: () => void;
}

const buttonProps: ButtonProps = {
  className: 'tall',
  size: 'medium',
  variant: 'text',
  radius: '0',
};

const GrpcSendButton: FunctionComponent<Props> = ({ running, methodType, handleStart, handleCancel }) => {
  if (running) {
    return (
      <Button {...buttonProps} onClick={handleCancel}>
        Cancel
      </Button>
    );
  }

  if (!methodType) {
    return (
      <Button {...buttonProps} disabled>
        Send
      </Button>
    );
  }

  return (
    <Button {...buttonProps} onClick={handleStart}>
      {methodType === GrpcMethodTypeEnum.unary ? 'Send' : 'Start'}
    </Button>
  );
};

export default GrpcSendButton;
