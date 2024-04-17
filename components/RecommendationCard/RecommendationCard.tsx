import {
    ActionIcon,
    Badge,
    Card,
    Divider,
    Group,
    Image,
    Stack,
    Text
  } from '@mantine/core';
  import {
    HiOutlineThumbDown,
    HiOutlineThumbUp,
    HiThumbDown,
    HiThumbUp
  } from 'react-icons/hi';

// import NoImage from '../illustrations_no-image.svg';
import { RecommendationDTO } from './types';

  function getRecommendedTypeCopy(type: string): string | null {
    switch (type) {
      case 'Interest':
        return 'Based on interest';
      case 'History':
        return 'Based on course you finished';
      case 'Vertical':
        return 'Recommended for';
      case 'Horizontal':
        return 'Recommended for Job Band';
      default:
        return null;
    }
  }

  
  
  interface RecommendationCardProps {
    item: RecommendationDTO;
    onFeedback: (recommendationId: string, feedback: string) => void;
  }
  
  export function RecommendationCard({
    item,
    onFeedback
  }: RecommendationCardProps) {
    const isBasedOnPosition = ['Vertical', 'Horizontal'].includes(item.type);
    const token = 'fa0b931c1a13c006a9534ada905ce2e7';


    const getImage = (url: string) => {
        return url + '?token=' + token;
    }
    
    return (
      <Card shadow="md" padding={0}>
        <Card.Section>
          <Image
            style={{
              width: '100%',
              height: '100px',
              objectFit: item.courseImgLink ? 'cover' : 'contain'
            }}
            src={
              item.courseImgLink
                ? getImage(item.courseImgLink)
                : '../illustrations_no-image.svg'
            }
            alt=""
          />
        </Card.Section>
        {!isBasedOnPosition && (
          <Stack gap="sm">
            <Divider />
            <Text fz={10} fw={700} c="#E49949" ta="center">
              {getRecommendedTypeCopy(item.type)}
            </Text>
            <Divider />
          </Stack>
        )}
        <Stack
          p="sm"
          justify="space-between"
          style={{ height: isBasedOnPosition ? 180 : 110 }}
        >
          <a href={`/event/${item.courseID}`} title={item.courseName}>
            <Text fz={14} fw={600} lineClamp={2} title={item.courseName}>
              {item.courseName}
            </Text>
          </a>
          {!isBasedOnPosition && (
            <Stack gap={3}>
              <Text fz={10} fw={600} c="dimmed" component="span">
                Target Audience
              </Text>
              <Badge variant="default" c="dimmed" size="sm" radius="sm">
                {item.isLecturer ? 'Lecturer' : 'Staff'}
              </Badge>
              <Text fz={10} fw={600} c="dimmed" component="span">
                {getRecommendedTypeCopy(item.type)}
              </Text>
              <Badge variant="default" c="dimmed" size="sm" radius="sm">
                {item.positionName}
              </Badge>
            </Stack>
          )}
          <Group justify="space-between">
            <Text fz={10} fw={600} c="dimmed" style={{ flexBasis: '40%' }}>
              Do you like this recommendation?
            </Text>
            <Group gap={2}>
              <ActionIcon
                aria-label="Like"
                size="sm"
                variant="transparent"
                onClick={() => onFeedback(item.id, 'Liked')}
              >
                {item.feedback === 'Liked' ? <HiThumbUp /> : <HiOutlineThumbUp />}
              </ActionIcon>
              <ActionIcon
                aria-label="Dislike"
                size="sm"
                variant="transparent"
                onClick={() => onFeedback(item.id, 'Disliked')}
              >
                {item.feedback === 'Disliked' ? (
                  <HiThumbDown />
                ) : (
                  <HiOutlineThumbDown />
                )}
              </ActionIcon>
            </Group>
          </Group>
        </Stack>
      </Card>
    );
  }
  