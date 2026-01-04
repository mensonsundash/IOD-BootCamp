// Specify the configuration items and data for the chart
let options = {
  title: { text: "Fake Store Categories" },
  xAxis: {
    type: "category",
    data: ["Category 1", "Category 2", "Category 3", "Category 4"],
  },
  yAxis: {},
  series: [
    {
      name: "# products",
      type: "bar",
      data: [0, 10, 50, 20],
    },
  ],
};

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    const productCategory = products.reduce((acc, p) => {
        //accumulator with array having object of product category starts from 0 if not exist
        acc[p.category] = (acc[p.category] || 0) + 1; //counts repeating categories with same name
        return acc;
    }, {});//initial acc should be empty object

    // console.log(productCategory);//results Object with key as cateogryy name and values by its repetition count
    // Set correct option data for the chart
    options.xAxis.data = Object.keys(productCategory); // gives unique category names
    options.series[0].data = Object.values(productCategory); // gives count of each cateogry names

  })
  .then(() => {
    // Display the chart
    myChart.setOption(options);
  });
// Initialize the echarts instance based on the prepared div
let myChart = echarts.init(document.getElementById("main"));
