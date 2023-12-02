import React from "react";

import { CardView, Loader } from "src/components";
import { useParams } from "react-router-dom";
import { useLanguageControl } from "src/hooks";
import { useGetPlaceIdQuery } from "src/api/main";

const SuggestCard = () => {
  const params = useParams();
  const languageControl = useLanguageControl();

  const { data: response } = useGetPlaceIdQuery(params.entityId || "");

  if (!response?.data?.id) {
    return <Loader />;
  }

  return (
    <CardView
      placeId={params.entityId}
      title={languageControl(response?.data?.title, response?.data?.titleEn)}
      images={[response.data.cover || {}, ...(response?.data?.photos || [])]}
      descriptionParagraph={languageControl(
        response?.data?.title,
        response?.data?.titleEn,
      )}
      contacts={{
        phone: response?.data?.phone,
        email: response?.data?.email,
        website: response?.data?.website,
        workTime: response?.data?.workingHours,
      }}
      buttons={{ showOnMapLink: true, QRCodeLink: response.data.linkForQrCode }}
    />
  );
};

export default SuggestCard;
