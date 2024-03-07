import React from 'react'
import styles from '../styles/comment.module.css'


const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.431 8.332 1.21-6.001 5.848 1.416 8.265-7.415-3.897-7.415 3.897 1.416-8.265-6.001-5.848 8.332-1.21z" fill="gold" />
    </svg>
);

interface CommentProps {
    comment: {
        name: string;
        comment: string;
        profession: string;
        stars: number;
    };
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.stars}>
                {/* Використовуйте значення stars, щоб відобразити відповідну кількість зірочок */}
                {[...Array(comment.stars)].map((_, index) => (
                    <StarIcon key={index} />
                ))}
            </div>
            {/* Відображення інших властивостей коментаря */}
            <p className={styles.comment}>{comment.comment}</p>
            <p className={styles.name}>{comment.name}</p>
            <p className={styles.comment}>{comment.profession}</p>
        </div>
    );
}

export default Comment;
