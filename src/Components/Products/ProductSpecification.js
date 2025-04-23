import React from "react";
import "./ProductSpecification.css";

const ProductSpecification = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      {/* General Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">General</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              <TableRow
                label="Sales Package"
                values={["1 sectional sofa", "1 Three Sector, 2 Single Sector"]}
              />
              <TableRow
                label="Model Number"
                values={["TFCBIIGRBL6SRH5", "DTUBLGRBL568"]}
              />
              <TableRow
                label="Secondary Material"
                values={["Solid Wood", "Solid Wood"]}
              />
              <TableRow
                label="Configuration"
                values={["L-shaped", "L-shaped"]}
              />
              <TableRow
                label="Upholstery Material"
                values={["Fabric + Cotton", "Fabric + Cotton"]}
              />
              <TableRow
                label="Upholstery Color"
                values={["Bright Grey & Lion", "Bright Grey & Lion"]}
              />
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Product</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              <TableRow label="Filling Material" values={["Foam", "Matte"]} />
              <TableRow
                label="Finish Type"
                values={["Bright Grey & Lion", "Bright Grey & Lion"]}
              />
              <TableRow label="Adjustable Headrest" values={["No", "Yes"]} />
              <TableRow
                label="Maximum Load Capacity"
                values={["280 KG", "300 KG"]}
              />
              <TableRow
                label="Origin of Manufacture"
                values={["India", "India"]}
              />
            </tbody>
          </table>
        </div>
      </div>

      {/* Dimensions Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Dimensions</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              <TableRow label="Width" values={["256-32 cm", "256-32 cm"]} />
              <TableRow label="Height" values={["76 cm", "76 cm"]} />
              <TableRow label="Depth" values={["167.78 cm", "167.78 cm"]} />
              <TableRow label="Weight" values={["45.90", "65.60"]} />
              <TableRow label="Seed Height" values={["44.52 cm", "44.52 cm"]} />
              <TableRow label="Leg Height" values={["5.46 cm", "5.46 cm"]} />
            </tbody>
          </table>
        </div>
      </div>

      {/* Warranty Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Warranty</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody className="font-normal">
              <TableRow
                label="Warranty Summary"
                values={[
                  "1 Year Manufacturing Warranty",
                  "12 Year Manufacturing Warranty",
                ]}
              />
              <TableRow
                label="Warranty Service Type"
                values={[
                  "For Warranty Claims of Any People Issued Please Email at registration@rwlwmfts.re.com",
                  "For Warranty Claims or Any Product Release Issued Please Email at suppart@wyc.com",
                ]}
              />
              <TableRow
                label="Covered in Warranty"
                values={[
                  "Warranty Against Manufacturing Defect",
                  "Warranty of the product is limited by a Complicating defects only.",
                ]}
              />
              <TableRow
                label="Not Covered in Warranty"
                values={[
                  "The Warranty Does Not Cover Damage Due To Good Time Product Reproved as Interested Use And Wired & Tend In The Natural Course Of Product Usage",
                  "The Warranty Does Not Cover Damage Due To Uspecs If The Product Reproved as Interested Use And Wired & Tend In The Natural Course Of Product Usage.",
                ]}
              />
              <TableRow
                label="Domestic Warranty"
                values={["1 Year", "3 Months"]}
              />
            </tbody>
          </table>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button className="px-6 py-2 bg-yellow-700 text-white rounded hover:bg-blue-700 transition">
          Add to Cart
        </button>
        <button className="px-6 py-2 bg-yellow-700 text-[#ffff] hover:bg-gray-700 transition">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

// Reusable table row component
const TableRow = ({ label, values }) => {
  return (
    <tr className="border-b border-gray-200">
      <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50 w-1/3">
        {label}
      </td>
      <td className="py-3 px-4 text-gray-600">{values[0]}</td>
      <td className="py-3 px-4 text-gray-600">{values[1]}</td>
    </tr>
  );
};

export default ProductSpecification;
