import styled from 'styled-components';
import CarouselSlideList from '../components/CarouselStore/CarouselSlideList';
import { Store } from '../../../types/store';

interface Props {
  stores: Store[];
}

const RecommendStore = ({ stores }: Props) => {
  const sortedData = [...stores].sort((a, b) => b.scraps.length - a.scraps.length);
  return (
    <Container>
      <CarouselSlideList text={'추천 팝업스토어😍'} stores={sortedData} />
    </Container>
  );
};

const Container = styled.div``;

export default RecommendStore;
