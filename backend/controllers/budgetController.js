const Budget =
  require(
    "../models/Budget"
  );

exports.getBudgets =
  async (
    req,
    res
  ) => {
    const budgets =
      await Budget.find(
        {
          user:
            req.user
              .id,
        }
      );

    res.json(
      budgets
    );
  };

exports.saveBudget =
  async (
    req,
    res
  ) => {

    const {
      category,
      limit,
    } = req.body;

    let budget =
      await Budget.findOne(
        {
          user:
            req.user
              .id,
          category,
        }
      );

    if (
      budget
    ) {

      budget.limit =
        limit;

      await budget.save();

      return res.json(
        budget
      );

    }

    budget =
      await Budget.create(
        {
          category,
          limit,
          user:
            req.user
              .id,
        }
      );

    res.json(
      budget
    );
  };