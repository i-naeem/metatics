import { Group, Text, useMantineTheme, Kbd } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useHotkeys } from '@mantine/hooks';
import { Upload, Photo, X } from 'tabler-icons-react';

function getIconColor(status, theme) {
  return status.accepted
    ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
    : status.rejected
    ? theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
    : theme.colorScheme === 'dark'
    ? theme.colors.dark[0]
    : theme.colors.gray[7];
}

function ImageUploadIcon({ status, ...props }) {
  if (status.accepted) {
    return <Upload {...props} />;
  }

  if (status.rejected) {
    return <X {...props} />;
  }

  return <Photo {...props} />;
}

export const dropzoneChildren = (status, theme) => (
  <Group
    position="center"
    spacing="xl"
    style={{ minHeight: 220, pointerEvents: 'none' }}
  >
    <ImageUploadIcon
      status={status}
      style={{ color: getIconColor(status, theme) }}
      size={80}
    />

    <div>
      <Text size="xl" inline>
        Drag images here or click to select files or press{' '}
        <span>
          <Kbd> Ctrl</Kbd> + <Kbd>shift</Kbd> + <Kbd>O</Kbd>
        </span>
      </Text>
      <Text size="sm" color="dimmed" inline mt={7}>
        Attach the file to find the hidden meta information.
      </Text>
    </div>
  </Group>
);

export default function FileDropzone({ onDrop, ...rest }) {
  const theme = useMantineTheme();
  useHotkeys([['ctrl+shift+o', () => console.log('Open Dropzone')]]);

  return (
    <Dropzone
      onDrop={(files) => onDrop(files[0])}
      onReject={(files) => console.log('rejected files', files)}
      // maxSize={3 * 1024 ** 2} Do not allow file larger than 5mb
      accept={IMAGE_MIME_TYPE}
      radius="md"
      {...rest}
    >
      {(status) => dropzoneChildren(status, theme)}
    </Dropzone>
  );
}
