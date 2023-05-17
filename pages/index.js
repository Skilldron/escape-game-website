import Hero from "@/components/hero";
import TestimonialComponent from "@/components/testimonial";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Grid,
  Stack,
} from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Escape Game - L'échapper Lille</title>
      <meta name="description" content="Venez découvrir nos thèmes étonnant et déversifier, entre amis ou en famille et même avec les enfants.
      A partir de 25 € par personnes, profitez d'une expérience époustouflante avec nos acteurs !" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <Hero />

      <Container mb={"36"}>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <Card w={"-webkit-max-content"}>
            <CardHeader>2 participants</CardHeader>
            <CardBody>38 euros / personne</CardBody>
          </Card>
          <Card  w={"-webkit-max-content"}>
            <CardHeader>3 participants</CardHeader>
            <CardBody>28 euros / personne</CardBody>
          </Card>
          <Card  w={"-webkit-max-content"}>
            <CardHeader>4 participants</CardHeader>
            <CardBody>25 euros / personne</CardBody>
          </Card>
        </Grid>
      </Container>
      <TestimonialComponent />
    </>
  );
}
