import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, arrayRemove, doc, updateDoc, getDoc } from 'firebase/firestore';

const Movie = ({ id, item }) => {
  const [like, setLike] = useState(false);
  const { user } = UserAuth();
  const [saved, setSaved] = useState(false);

  const movieID = doc(db, 'users', `${user?.email}`);

  useEffect(() => {
    const fetchSavedShows = async () => {
      if (user?.email) {
        const docSnap = await getDoc(movieID);
        if (docSnap.exists()) {
          const savedShows = docSnap.data()?.savedShows || [];
          const isLiked = savedShows.some((show) => show.id === item.id);
          if (isLiked) {
            setLike(true);
          }
        }
      }
    };

    fetchSavedShows();
  }, [user, item.id, movieID]);

  const saveShow = async () => {
    if (user?.email) {
      if (!like) {
        setLike(true);
        setSaved(true);
        await updateDoc(movieID, {
          savedShows: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path,
          }),
        });
      } else {
        setLike(false);
        setSaved(false);
        await updateDoc(movieID, {
          savedShows: arrayRemove({
            id: item.id,
            title: item.title,
            img: item.backdrop_path,
          }),
        });
      }
    } else {
      alert('Please log in to save a movie');
    }
  };

  return (
    <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
      <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={item?.title} />
      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white flex items-center justify-center'>
        <p className='text-xs md:text-sm font-bold text-center'>{item?.title}</p>
        <p onClick={saveShow} className='absolute top-4 left-4'>
          {like ? <FaHeart className='text-gray-300' /> : <FaRegHeart className='text-gray-300' />}
        </p>
      </div>
    </div>
  );
};

export default Movie;

