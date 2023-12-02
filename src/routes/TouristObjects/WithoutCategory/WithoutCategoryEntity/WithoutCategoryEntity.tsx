import React from "react";
import { useParams } from "react-router-dom";

import { CardView, Loader } from "src/components";
import { useGetPlaceIdQuery } from "src/api/main";
import { useLanguageControl } from "src/hooks";

const WithoutCategoryEntity = () => {
  const params = useParams();
  const languageControl = useLanguageControl();

  const { data: response } = useGetPlaceIdQuery(params.entityId || "");

  if (!response?.data?.id) {
    return <Loader />;
  }

  return (
    <CardView
      placeId={params.entityId || ""}
      title={languageControl(response?.data?.title, response?.data?.titleEn)}
      images={[response.data.cover || {}, ...(response?.data?.photos || [])]}
      descriptionParagraph={languageControl(
        response?.data?.description,
        response?.data?.descriptionEn,
      )}
      contacts={{
        phone: response.data.phone,
        website: response.data.website,
        email: response.data.email,
        workTime: response.data.workingHours,
      }}
      buttons={{
        showOnMapLink: true,
        QRCodeLink: response.data.linkForQrCode,
      }}
    />
  );
};

export default WithoutCategoryEntity;
