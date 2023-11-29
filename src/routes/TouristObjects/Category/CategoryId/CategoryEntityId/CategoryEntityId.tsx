import React from "react";
import { useParams } from "react-router-dom";

import { CardView } from "src/components";
import { useGetPlaceIdQuery } from "src/api/main";

const CategoryEntityId = () => {
  const params = useParams();
  const { data: response } = useGetPlaceIdQuery(params.entityId || "");

  if (!response?.data?.id) {
    return <></>;
  }

  return (
    <div>
      <CardView
        placeId={params.entityId}
        title={response.data.title}
        descriptionTitle="Описание"
        descriptionParagraph={response.data.description}
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
