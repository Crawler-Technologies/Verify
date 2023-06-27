import {useState} from 'react';
import {Text, View, Image} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import Antdesigns from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';
import Comment from '../comments/Comment';
import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel';
import {IPost, IComment} from '../../types/models';

interface IFeedPost {
  post: IPost;
  comment: IComment;
}

const FeedPost = ({post}: IFeedPost) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(v => !v);
  };
  const toggleLiked = () => {
    setIsLiked(v => !v);
  };

  
  let Content = null;

 Content = ({post}) => {
    if (post.image) {
      return (
        <Image
          source={{uri: post.image}}
          style={{
            width: '100%',
            aspectRatio: 1,
          }}
        />
      );
    } else if (post.images) {
      return (
        <Carousel images={post.images}/>
      );
    }
  };

  return (
    <View style={styles.post}>
      {/* header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.username}>{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      {/* content */}
      <DoublePressable onDoublePress={toggleLiked}>
        <Content post={post} />
      </DoublePressable>
      {/* footer*/}

      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Antdesigns
            name={isLiked ? 'heart' : 'hearto'}
            size={24}
            color={isLiked ? colors.accent : colors.black}
            style={styles.icon}
            onPress={toggleLiked}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>

        <Text style={styles.text}>
          Liked by <Text style={styles.username}>{post.user.username}</Text> and{' '}
          <Text style={styles.username}>{post.nofLikes} others</Text>
        </Text>
        {/* caption */}
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={styles.username}>{post.user.username}</Text>{' '}
          {post.description}
        </Text>
        <Text onPress={toggleDescriptionExpanded}>
          {isDescriptionExpanded ? 'show less' : 'show more'}
        </Text>
        {/* comments */}
        <Text>View all {post.nofComments} comments</Text>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}

        {/* post date */}
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};
export default FeedPost;
