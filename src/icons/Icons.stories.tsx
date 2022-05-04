/* This is a generated file, do not modify. 이 파일은 자동 생성된 파일입니다. 수정하지 마십시오. */

import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ArrowDownLineIcon, AdbadgeLineIcon, AdbadgeFilledIcon, ArrowLeftLineIcon, ArrowRightLineIcon, BellFilledIcon, ArrowUpLineIcon, BellLineIcon, BellmuteLineIcon, BookLineIcon, BoardLineIcon, CameraFilledIcon, CalendarFilledIcon, BoardFilledIcon, CheckcircleFilledIcon, ClipLineIcon, CameraLineIcon, CameracircleLineIcon, CheckLineIcon, BookFilledIcon, CheckcircleLineIcon, CommentFilledIcon, CommentLineIcon, DotbadgeLineIcon, DotsHorizontalLineIcon, DotsVerticalLineIcon, DownloadLineIcon, EmojiaddLineIcon, EyeopenLineIcon, FoodFilledIcon, FoodcalendarFilledIcon, CalendarLineIcon, FoodLineIcon, FoodcalendarLineIcon, HomeLineIcon, ListLineIcon, LockFilledIcon, HomeFilledIcon, NewLineIcon, NoticeFilledIcon, GroundFilledIcon, PersonFilledIcon, GroundLineIcon, LockLineIcon, PenLineIcon, NoticeLineIcon, PersonLineIcon, PictureFilledIcon, PersoncircleLineIcon, PenFilledIcon, PictureLineIcon, PinFilledIcon, PinLineIcon, PlaycircleFilledIcon, PlusLineIcon, NewFilledIcon, SavecircleFilledIcon, RecommentLineIcon, RefreshLineIcon, SavecircleLineIcon, EyeclosedLineIcon, PlaycircleLineIcon, SharecircleFilledIcon, SchoolcalendarLineIcon, SchoolcalendarFilledIcon, StarFilledIcon, StarLineIcon, ThumbUpLineIcon, ThumbUpFilledIcon, SharecircleLineIcon, TrashcanFilledIcon, TimecalendarFilledIcon, TimecalendarLineIcon, TrashcanLineIcon, WarningcircleLineIcon, ThumbDownLineIcon, SearchLineIcon, ThumbDownFilledIcon, WarningcircleFilledIcon, XLineIcon, XcircleFilledIcon } from '.'

const iconObj = { ArrowDownLineIcon, AdbadgeLineIcon, AdbadgeFilledIcon, ArrowLeftLineIcon, ArrowRightLineIcon, BellFilledIcon, ArrowUpLineIcon, BellLineIcon, BellmuteLineIcon, BookLineIcon, BoardLineIcon, CameraFilledIcon, CalendarFilledIcon, BoardFilledIcon, CheckcircleFilledIcon, ClipLineIcon, CameraLineIcon, CameracircleLineIcon, CheckLineIcon, BookFilledIcon, CheckcircleLineIcon, CommentFilledIcon, CommentLineIcon, DotbadgeLineIcon, DotsHorizontalLineIcon, DotsVerticalLineIcon, DownloadLineIcon, EmojiaddLineIcon, EyeopenLineIcon, FoodFilledIcon, FoodcalendarFilledIcon, CalendarLineIcon, FoodLineIcon, FoodcalendarLineIcon, HomeLineIcon, ListLineIcon, LockFilledIcon, HomeFilledIcon, NewLineIcon, NoticeFilledIcon, GroundFilledIcon, PersonFilledIcon, GroundLineIcon, LockLineIcon, PenLineIcon, NoticeLineIcon, PersonLineIcon, PictureFilledIcon, PersoncircleLineIcon, PenFilledIcon, PictureLineIcon, PinFilledIcon, PinLineIcon, PlaycircleFilledIcon, PlusLineIcon, NewFilledIcon, SavecircleFilledIcon, RecommentLineIcon, RefreshLineIcon, SavecircleLineIcon, EyeclosedLineIcon, PlaycircleLineIcon, SharecircleFilledIcon, SchoolcalendarLineIcon, SchoolcalendarFilledIcon, StarFilledIcon, StarLineIcon, ThumbUpLineIcon, ThumbUpFilledIcon, SharecircleLineIcon, TrashcanFilledIcon, TimecalendarFilledIcon, TimecalendarLineIcon, TrashcanLineIcon, WarningcircleLineIcon, ThumbDownLineIcon, SearchLineIcon, ThumbDownFilledIcon, WarningcircleFilledIcon, XLineIcon, XcircleFilledIcon }

interface IconWrapperProps {
  size: string
}

const IconWrapper: React.FC<IconWrapperProps> = ({ size }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '860px' }}>
    {Object.entries(iconObj).map(([key, value]) => (
      <div key={key} title={key}>{React.createElement(value, { width: size, height: size })}</div>
    ))}
  </div>
)

export default {
  title: 'Foundation/Icons',
  component: IconWrapper,
  argTypes: {},
} as ComponentMeta<typeof IconWrapper>

const Template: ComponentStory<typeof IconWrapper> = ({ size }) => <IconWrapper size={size} />

export const Primary = Template.bind({})
Primary.args = {
  size: '24px',
}