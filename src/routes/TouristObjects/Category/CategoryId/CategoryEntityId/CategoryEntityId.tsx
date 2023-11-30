import React from "react";
import { useParams } from "react-router-dom";

import { CardView } from "src/components";
import { useLanguageControl } from "src/hooks";
import { useGetPlaceIdQuery } from "src/api/main";

const CategoryEntityId = () => {
  const params = useParams();
  const languageControl = useLanguageControl();
  const { data: response } = useGetPlaceIdQuery(params.entityId || "");

  if (!response?.data?.id) {
    return <></>;
  }

  return (
    <div>
      <CardView
        placeId={params.entityId}
        title={languageControl(response.data.title, response.data.titleEn)}
        descriptionParagraph={languageControl(
          response.data.description,
          response.data.descriptionEn,
        )}
        images={[response.data.cover || {}, ...(response?.data?.photos || [])]}
        buttons={{
          showOnMapLink: true,
          QRCodeLink: response?.data?.linkForQrCode,
        }}
      />
    </div>
  );
};

export default CategoryEntityId;
