import React from 'react';
import { Layout } from '../components';
import {gql, useQuery} from '@apollo/client';
import TrackCard from '../containers/track-card';

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */


export const TRACKS =gql`
query TracksForHome {
  tracksForHome {
    id
    title
    thumbnail
    length
    modulesCount
    author {
      photo
      name
      id
    }
  }
}
`;

const Tracks = () => {
  const {loading, error, data} = useQuery(TRACKS);
  if(loading) return 'Loading...';
  if(error) return `Error! ${error.message}`;
  return <Layout grid>
    {data?.tracksForHome?.map(track => (
      <TrackCard key={track.id} track={track} />
    ))}
    </Layout>;
};

export default Tracks;
