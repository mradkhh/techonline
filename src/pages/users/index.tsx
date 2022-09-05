import { GetStaticPropsResult } from "next";


type UsersPageProps  = {
  context: any
}

export default function Users(props: any) {
  // const { locale, locales, defaultLocale, context } = props;
  // console.log("locale: ", locale, "locale: ",locales, defaultLocale);
  console.log("context: ", props.context.locale);


  return (
    <div>
      <span>Users Component</span>
    </div>
  );
}

export const getStaticProps = async (context: any): Promise<GetStaticPropsResult<UsersPageProps>> => {
  return {
    props: context,
  };
};