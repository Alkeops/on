import { UserLayout, Container, FlexContainer } from "@templates";
import { MainSection } from "@organisms";
export default function Home() {
  return (
    <UserLayout>
      <Container full isXlWide>
        <MainSection />
      </Container>
    </UserLayout>
  );
}
