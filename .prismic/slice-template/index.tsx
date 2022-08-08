import React from 'react';
import { Slice } from "@prismicio/types"

export interface IProps extends Slice {
slice_type: "{{componentId}}"
}

export default function {{componentName}}({ slice_type }: IProps) {
return (
<div>

</div>
);
}