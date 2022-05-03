<script language="ts">
  import processJob from "@/utils/process-job";

  let result = "";
  let job = "";

  const handleClick = () => {
    console.log(result);
    result = processJob(job);
  };
</script>

<div class="question-wrapper">
  <div class="input-content">
    <label class="job-label" for="job"> What's your job?</label>
    <input placeholder="Job" id="job" type="text" bind:value={job} />
  </div>
  <button class="job-button" on:click={handleClick}> Find Out</button>
  <p class="result-font">{result}</p>
</div>

<style lang="scss">
  .question-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    margin-top: 20px;
    .input-content {
      margin: 25px;
    }
    .job-label {
      margin: 10px;
    }
    .job-button {
      margin-bottom: 25px;
    }
    .result-font {
      color: gray;
    }
  }
</style>
